const Login =()=>{
    return(<>
<div
    class="relative mx-auto mt-20 w-full max-w-md bg-bleu-ciel px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-3xl font-semibold text-black-maron">Log in</h1>
            <p class="mt-2 text-gray-500">Log in below to access your account</p>
        </div>
        <div class="mt-5">
            <form action="">
                <div class="relative mt-6">
                    <input type="email" name="email" id="email" placeholder="Email Address" class="peer rounded-md bg-blanc mt-1 w-full border-b-2 border-black-maron px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div class="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" class="peer peer mt-1 bg-blanc rounded-md w-full border-b-2 border-black-maron px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <div class="my-6">
                    <button type="submit" class="w-full rounded-md bg-jaune px-3 py-4 text-black-maron font-bold focus:bg-gray-600 focus:outline-none">Log in</button>
                </div>
                <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <a href="/signin"
                        class="font-semibold text-gray-600 hover:underline focus:text-orange focus:outline-none">Sign
                        up
                    </a>.
                </p>
            </form>
        </div>
 </div>
</div>
</>
    )
}
export default Login;
   