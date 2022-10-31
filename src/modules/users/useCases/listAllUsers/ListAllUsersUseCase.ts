import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    console.log(user);

    if (!user) {
      throw new Error("This user doesn't exist");
    }
    if (!user.admin) {
      throw new Error("You don't have permission to access this resource");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
