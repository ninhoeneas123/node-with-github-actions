class UsersController {

    createUser(req: any, res: any) {
        res.send('User created successfully!');
    }

}

export default new UsersController();