import UserService from "./user-service";

class UsersController {

    async createUser(req: any, res: any) {
        const data = req.body;
        const user = await UserService.createUser(data);
        return res.status(201).json({ message: "usuario criado com sucesso !", userId: user._id });
    }

    async listUsers(req: any, res: any) {
        const data = await UserService.listUsers();
        return res.status(200).json(data);
    }

    async deleteUser(req: any, res: any) {
        const id = req.params.id;
       await UserService.removeUser(id);
        return res.status(200).json(
            { message: 'usuario deletado com sucesso !' }
        );
    }
}

export default new UsersController();