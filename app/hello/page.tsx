import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function Page() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="bg-blue-500 text-white p-4 text-3xl">
                Hi Everyone
            </h1>
            <h1 className="bg-blue-500 text-white p-4 text-3xl">
                How are you doing?
            </h1>
        </div>
    );
}