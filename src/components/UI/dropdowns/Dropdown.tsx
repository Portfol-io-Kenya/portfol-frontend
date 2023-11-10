"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"

interface Props {
    button?: any
    menu?: any
}

export default function Dropdown({button, menu}:Props) {
  return (
    <div >
      <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button>
                {button}
            </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 z-50 rounded-md bg-white/70 border border-white backdrop-blur-xl  ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
                {menu.map((item: any) => (
                    <Menu.Item key={item}>
                    {({ active }) => (
                        <button
                            className={`${
                            active ? 'bg-green-500 text-white' : 'text-green-600'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={item.onClick && item.onClick}
                        >
                            <div className="flex items-center">
                                {item.icon && <div className="mr-2 ">{item.icon}</div>}
                                {item.title}
                            </div>
                        </button>
                    )}
                  </Menu.Item>
                ))}
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}