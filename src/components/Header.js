import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        
        const loginButton = (
            <li>{/* Link는 a 태그와 다르게 페이지를 새로 로딩하는 것을 막고 라우트에 보여지는 내용만 변하게 해줌 */}
                <Link to="/login">
                    <i className='material-icons'>vpn_key</i>
                </Link>
            </li>
        );
    }
}

export default Header