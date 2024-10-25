import { createContext } from "react";

type LoginData = {
    login: any,
    setLogin: React.Dispatch<React.SetStateAction<any>>
}

const initValue = {
    login: { id: 0, username: '', plan_total: '', ac_active_date: '', sponsor_id: '', first_name: '', last_name: '' },
    setLogin: () => ''
}

const UserContext = createContext<LoginData>(initValue);

export default UserContext;

