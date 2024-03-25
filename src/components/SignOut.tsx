function SignOut (event: any) {
    event.preventDefault();
    localStorage.clear()
    window.location.href = "/"
    }

export default SignOut