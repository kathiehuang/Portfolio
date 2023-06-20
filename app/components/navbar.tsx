'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-scroll'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/" spy={true} smooth={true} duration={700} className="font-mono text-sm leading-6 text-stone-900 hover:text-teal-700 transition-opacity hover:cursor-pointer">home</Link>
            <Link to="about" spy={true} smooth={true} offset={20} duration={700} className="font-mono text-sm leading-6 text-stone-900 hover:text-teal-700 transition-opacity hover:cursor-pointer">about</Link>
            <Link to="projects" spy={true} smooth={true} offset={25} duration={700} className="font-mono text-sm leading-6 text-stone-900 hover:text-teal-700 transition-opacity hover:cursor-pointer">projects</Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-emerald-50 bg-opacity-60 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="/" spy={true} smooth={true} offset={50} duration={500} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all text-gray-900 hover:bg-white hover:bg-opacity-50 hover:text-teal-800 hover:cursor-pointer">home</Link>
                  <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all text-gray-900 hover:bg-white hover:bg-opacity-50 hover:text-teal-800 hover:cursor-pointer">about</Link>
                  <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all text-gray-900 hover:bg-white hover:bg-opacity-50 hover:text-teal-800 hover:cursor-pointer">projects</Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
