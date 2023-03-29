import classNames from 'classnames/bind';
import { HiPencil } from 'react-icons/hi';
import { ImBin } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Table.module.scss';
import { DeleteAdmin, getAllAdmins } from '~/services/adminServices';
import { allAdminSelector, loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function TableAdmin({ setAdmin, setShow }) {
    const allAdmins = useSelector(allAdminSelector);
    const login = useSelector(loginSelector);
    const dispatch = useDispatch();

    const handleEdit = (admin) => {
        setAdmin(admin);
        setShow(true);
    };

    const handleDelete = async (admin) => {
        const result = window.confirm('Do you want to delete this admin?');
        if (result) {
            await DeleteAdmin(admin, login.accessToken);
            getAllAdmins(dispatch, login.accessToken);
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
                        {allAdmins?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={() => handleEdit(item)} className={cx('btn')}>
                                            <HiPencil />
                                        </button>
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

export default TableAdmin;
