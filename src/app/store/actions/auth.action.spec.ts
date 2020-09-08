import { LogIn, LogInSuccess, AuthActionTypes, LogInFailure, SignUp, SignUpSuccess, SignUpFailure, LogOut } from './auth.actions';

describe('Customer Select', () => {
    it('should set an action of type [Auth] Login', () => {
        const user = { email: 'test@gmail.com', password: 'TestPassword' };
        const action = new LogIn(user);
        expect(action.type).toBe(AuthActionTypes.LOGIN);
        expect(action.payload).toBe(user);
    });

    it('should set an action of type [Auth] Login Success', () => {
        const user = { email: 'test@gmail.com', password: 'TestPassword' };
        const action = new LogInSuccess(user);
        expect(action.type).toBe(AuthActionTypes.LOGIN_SUCCESS);
        expect(action.payload).toBe(user);
    });

    it('should set an action of type [Auth] Login Failure', () => {
        const user = { email: 'test@gmail.com', password: 'TestPassword' };
        const action = new LogInFailure(user);
        expect(action.type).toBe(AuthActionTypes.LOGIN_FAILURE);
        expect(action.payload).toBe(user);
    });
    it('should set an action of type [Auth] SignUp', () => {
        const user = {userName: 'tester', email: 'test@gmail.com', password: 'TestPassword' };
        const action = new SignUp(user);
        expect(action.type).toBe(AuthActionTypes.SIGNUP);
        expect(action.payload).toBe(user);
    });

    it('should set an action of type [Auth] SignUp Success', () => {
        const user = { userName: 'tester', email: 'test@gmail.com', password: 'TestPassword' };
        const action = new SignUpSuccess(user);
        expect(action.type).toBe(AuthActionTypes.SIGNUP_SUCCESS);
        expect(action.payload).toBe(user);
    });

    it('should set an action of type [Auth] SignUp Failure', () => {
        const user = { userName: 'tester', email: 'test@gmail.com', password: 'TestPassword' };
        const action = new SignUpFailure(user);
        expect(action.type).toBe(AuthActionTypes.SIGNUP_FAILURE);
        expect(action.payload).toBe(user);
    });

    it('should set an action of type [Auth] LogOut', () => {
        const action = new LogOut();
        expect(action.type).toBe(AuthActionTypes.LOGOUT);
    });
});

