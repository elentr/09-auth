import css from './Header.module.css';
import Link from 'next/link';
import TagsMenu from '@/components/TagsMenu/TagsMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const Header = async () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link className={css.navigationLink} href="/">
              Home
            </Link>
          </li>
          <li className={css.navigation}>
            <TagsMenu />
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
