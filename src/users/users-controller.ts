class UsersController {

    createUser(req: any, res: any) {
        res.send({message:"usuario criado com sucesso !"});
    }

}

export default new UsersController();