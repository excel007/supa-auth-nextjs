'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { db } from '@/lib/db/db'
import { useraccount } from '@/lib/db/schema'

import { createSession, updateSession, getSession } from '@/lib/session'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const payload = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data, error } = await supabase.auth.signInWithPassword(payload)

  if (error) {
    redirect('/error')
  }

  await createSession(data.user?.id, data.user?.email);

  revalidatePath('/', 'layout')
  redirect('/private')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const results = await db.insert(useraccount).values({
    username: data.email,
    email: data.email
  }).returning(
    { id: useraccount.id }
  );

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }
  const session = await createSession(results[0].id, data.email);
  console.log('create session', session);


  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signOut() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  console.log('sign out')
  redirect('/')

}
