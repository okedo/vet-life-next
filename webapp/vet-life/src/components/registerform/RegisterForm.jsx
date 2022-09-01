export default function RegisterForm() {
    return <form>
        <div>
            <input name="username" id="username" type="text" />
            <label htmlFor="username">Add your username</label>
        </div>
        <div>
            <input name="password" id="password" type="password" />
            <label htmlFor="password">Password</label>
        </div>
        <div>
            <input name="confirmPassword" id="confirmPassword" type="password" />
            <label htmlFor="confirmPassword">confirm password</label>
        </div>
    </form>
}