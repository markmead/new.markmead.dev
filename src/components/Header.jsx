import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { pathname } = useRouter()

  const links = [
    { title: 'Blog', path: '/blog', external: false },
    { title: 'Projects', path: '/projects', external: false },
    {
      title: 'GitHub',
      path: 'https://github.com/markmead',
      external: true,
    },
  ]

  return (
    <header>
      <div className="flex items-center justify-between">
        <Link href="/">
          <a
            aria-current={pathname === '/' ? 'page' : 'false'}
            className="font-medium"
          >
            Home
          </a>
        </Link>

        <nav className="flex items-center gap-4">
          {links.map((menuItem) => (
            <Link href={menuItem.path} key={menuItem.path}>
              <a
                className={`text-sm font-medium ${
                  pathname === menuItem.path && 'underline'
                }`}
                {...(menuItem.external && {
                  target: '_blank',
                  rel: 'noreferrer',
                })}
                {...(pathname === menuItem.path && {
                  'aria-current': 'page',
                })}
              >
                {menuItem.title}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
