"use server";
import { redirect } from "next/navigation";

import { db } from "../db/db";
import { useraccount } from "../db/schema";

export async function signupAction(formData: FormData) {
    console.log('formData', formData);
    const username = String(formData.get('email'));
    const email = String(formData.get('email'));

    const results = await db.insert(useraccount).values({
        username, email
    })
        .returning({
            id: useraccount.id
        })

    redirect(`/private/${results[0].id}`);
    // redirect(`/private/${results[0].id}`);
}