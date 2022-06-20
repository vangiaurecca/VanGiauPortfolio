import './Home.module.scss';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Typewriter from './Typewriter';
import Introduction from './Introduction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <h2 className={cx('heading')}>
                        Hello ...
                        <span
                            className={cx('wave')}
                            role="img"
                            aria-labelledby="wave"
                        >
                            👋🏻
                        </span>
                    </h2>
                    <h1 className={cx('heading-name')}>
                        I'M
                        <strong className={cx('highlight')}>GIAU NGUYEN</strong>
                    </h1>
                    <div className={cx('type-name')}>
                        <Typewriter />
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('container')}>
                        <div className={cx('home-socials')}>
                            <a href="https://www.linkedin.com/in/vangiaurecca">
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faLinkedin}
                                />
                            </a>
                            <a href="https://github.com/vangiaurecca">
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faGithub}
                                />
                            </a>
                            <a href="https://fb.com/vangiau.recca">
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faFacebook}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Introduction />
        </>
    );
};

export default Home;
