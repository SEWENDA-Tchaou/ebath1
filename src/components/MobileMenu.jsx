import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MobileMenu({ visible }) {
    if (!visible) {
        return null
    }

    return (
        <div className="bg-noir w-56 absolute top-12 right-4 py-5 flex-col border-2 border-cafe flex">
            <div className="flex flex-col gap-4">
                <Link
                    to="/"
                    className="px-4 text-center text-blanc cursor-pointer hover:opacity-80"
                >
                    Accueil
                </Link>
                <Link
                    to="/apropos"
                    className="px-4 text-center text-blanc cursor-pointer hover:opacity-80"
                >
                    A propos
                </Link>
                <Link
                    to="/services"
                    className="px-4 text-center text-blanc cursor-pointer hover:opacity-80"
                >
                    Services
                </Link>
                <Link
                    to="/contact"
                    className="px-4 text-center text-blanc cursor-pointer hover:opacity-80"
                >
                    Contacts
                </Link>
                <a
                    href="/login"
                    className="max-md:hidden px-4 text-center text-blanc cursor-pointer hover:opacity-80"
                >
                    Connexion
                </a>
            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default MobileMenu;
