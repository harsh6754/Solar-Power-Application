import { Disclosure, Menu } from '@headlessui/react'
import { useState } from 'react'; // Import useState
import Logo from '../Images/Solar.png'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Dashboard', href: '#' },
  { name: 'Team', href: '/team' },
  { name: 'Feedback', href: '/feedback' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [current, setCurrent] = useState(navigation[0].name); // Initialize state with the first navigation item
   
  const handleLinkClick = (name) => {
    setCurrent(name); // Update current state when a link is clicked
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 z-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo aligned to the left */}
          <div 
          className=" flex justify-start items-center flex-shrink-0 cursor-pointer">
            <img
              alt="Your Company"
              src={Logo}
              className="h-20 w-auto"
            />
            <span className="ml-0 text-2xl font-semibold text-white">
              Solar-Power
            </span>
          </div>


          {/* Centered navigation links */}
          <div className="hidden sm:ml-6 sm:block flex-1">
            <div className="flex justify-center space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleLinkClick(item.name)} // Set current on click
                  aria-current={item.name === current ? 'page' : undefined} // Check if the current item matches
                  className={classNames(
                    item.name === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Profile dropdown on the right */}
          <div className="flex items-center justify-end">
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="User"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/login"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/login"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Login
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => handleLinkClick(item.name)} // Set current on click
              aria-current={item.name === current ? 'page' : undefined} // Check if the current item matches
              className={classNames(
                item.name === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}
