import classNames from 'classnames/bind';
import { ImBin } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Table.module.scss';
import { DeleteUser, getAllUsers } from '~/services/adminServices';
import { allUserSelector, loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function TableUser() {
    const allUsers = useSelector(allUserSelector);
    const login = useSelector(loginSelector);
    const dispatch = useDispatch();

    const handleDelete = async (admin) => {
        const result = window.confirm('Do you want to delete this user ?');
        if (result) {
            await DeleteUser(admin, login.accessToken);
            getAllUsers(dispatch, login.accessToken);
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <table className={cx('customers')}>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Option</th>
                        </tr>
                        {allUsers?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className={cx('btn')}>
                                            <ImBin />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableUser;
