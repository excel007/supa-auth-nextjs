import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { signOut } from '../login/actions'

import { getSession } from '@/lib/session'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  const session = await getSession()
  console.log('session page : ', session)
  if (!session) {
    return <div>กรุณาเข้าสู่ระบบ</div>
  }
  return <div>
    <p>
      Hello {data.user.email}
    </p>
    <form>
      <button formAction={signOut}>Sign out</button>
    </form>
    ยินดีต้อนรับ, User ID: {session.userId} {session.email}

  </div>
}