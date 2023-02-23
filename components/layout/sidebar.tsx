import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3CenterLeftIcon,
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  Cog6ToothIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  RectangleGroupIcon,
  InboxIcon,
  PaperAirplaneIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  DocumentIcon,
  BookmarkIcon,
  LifebuoyIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children: React.ReactElement;
}

export function Sidebar(props: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const children = props.children;

  const router = useRouter();

  const [current, setCurrent] = useState("");

  interface Menu {
    name: String;
    href?: String;
    icon: (props: React.ComponentProps<"svg">) => JSX.Element;
    admin?: boolean;
  }

  const [sidebarNavigation, setSidebarNavigation] = useState<Menu[]>([
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Quotes",
      href: "/quotes",
      icon: BookmarkIcon,
    },
    {
      name: "Services",
      href: "/services",
      icon: InboxIcon,
    },
    {
      name: "Leads",
      icon: UserIcon,
    },
    {
      name: "Tours",
      icon: PaperAirplaneIcon,
    },
    {
      name: "Invoices",
      icon: DocumentIcon,
    },
    { name: "Analytics", icon: PresentationChartLineIcon },
    { name: "Team", icon: UserGroupIcon },
    { name: "Admin", icon: Cog6ToothIcon },
    { name: "Support", icon: LifebuoyIcon },
  ]);

  useEffect(() => {
    CurrentNav(router.pathname);
  }, [router.pathname]);

  function CurrentNav(href: string) {
    setCurrent(href);
    sidebarNavigation.forEach((item: any) => {
      item.current = item.href === href;
    });
    setSidebarNavigation(sidebarNavigation);
  }

  function menuMobile(href: string) {
    CurrentNav(href);
    closeMobileMenu();
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    const elem = document.getElementsByClassName("modalMobile")[0];
    elem?.parentNode.removeChild(elem);
  }

  return (
    <>
      <div className="flex h-full">
        {/* Narrow sidebar */}
        <div className="fixed z-10 flex-col hidden w-32 h-screen overflow-y-auto bg-wet-background md:block">
          <div className="flex flex-col items-center justify-around w-full h-full pt-12">
            <div className="w-full space-y-1">
              {sidebarNavigation.map((item: any) =>
                item.href ? (
                  <Link
                    href={item.href}
                    key={item.name}
                    onClick={() => CurrentNav(item.href)}
                    className={classNames(
                      item.current ? "bg-wet-mid" : "hover:bg-wet-mid ",
                      "group w-full p-4 flex flex-row items-center text-xs font-medium text-wet-dark rounded-r-md"
                    )}
                    aria-current={item.current ? item.name : undefined}
                  >
                    <item.icon
                      className="w-5 h-5 text-wet-dark"
                      aria-hidden="true"
                    />
                    <span className="ml-3 ">{item.name}</span>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    className={classNames(
                      item.current ? "bg-wet-mid" : "hover:bg-wet-mid ",
                      "group w-full p-4 flex flex-row items-center text-xs font-medium text-wet-dark"
                    )}
                    aria-current={item.current ? item.name : undefined}
                  >
                    <item.icon
                      className="w-5 h-5 text-wet-dark"
                      aria-hidden="true"
                    />
                    <span className="ml-3 ">{item.name}</span>
                  </button>
                )
              )}
            </div>
            <div className="absolute bottom-0 pt-6 mb-6 text-xs text-center border-t text-wet-divider border-wet-divider">
              <p>Allright received</p>
              <p>by wetbat 2022</p>
            </div>
          </div>
        </div>

        {/* Mobile menu */}

        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="md:hidden modalMobile"
            onClose={() => closeMobileMenu()}
          >
            <div className="fixed inset-0 z-10 flex ">
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600  !bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-wet-dark ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 p-1 top-1 -mr-14">
                      <button
                        type="button"
                        className="flex items-center justify-center w-12 h-12 rounded-full"
                        onClick={() => closeMobileMenu()}
                      >
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col items-center flex-shrink-0 px-4">
                    <Image
                      src={"/images/logos/wetbat.svg"}
                      alt="Wet Bat Logo"
                      width={130}
                      height={100}
                      className="h-12 "
                    />
                  </div>
                  <div className="flex-1 h-0 px-2 mt-5 overflow-y-auto">
                    <nav className="flex flex-col h-full">
                      <div className="space-y-1">
                        {sidebarNavigation.map((item: any) =>
                          item.href ? (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => menuMobile(item.href)}
                              className={classNames(
                                item.current
                                  ? "bg-wet-green text-white"
                                  : "text-gray-100 hover:bg-wet-green hover:text-white",
                                "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-white"
                                    : "text-gray-300 group-hover:text-white",
                                  "mr-3 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              <span>{item.name}</span>
                            </Link>
                          ) : (
                            <button
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? "bg-wet-green text-white"
                                  : "text-gray-100 hover:bg-wet-green hover:text-white",
                                "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-white"
                                    : "text-gray-300 group-hover:text-white",
                                  "mr-3 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              <span>{item.name}</span>
                            </button>
                          )
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="w-full md:fixed md:z-10">
            <div className="relative z-10 flex flex-shrink-0 h-12 pr-5 shadow-sm bg-wet-dark sm:pl-5">
              <button
                type="button"
                className="px-4 text-wet-light md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3CenterLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="flex flex-row justify-between w-full">
                <div className="flex-row items-center hidden space-x-4 md:flex">
                  <RectangleGroupIcon className="h-7 w-7 text-wet-light" />
                  <Image
                    src={"/images/logos/wetbat.svg"}
                    alt="Wet Bat Logo"
                    width={130}
                    height={100}
                    className="h-12 py-2"
                  />
                </div>
                <div className="flex justify-between w-full sm:w-fit">
                  <div className="flex">
                    <form
                      className="flex items-center w-full"
                      action="/search/quotes"
                      method="GET"
                    >
                      <div className=" w-[30vw] flex items-center h-7 text-sm text-gray-900 border-transparent bg-wet-mid rounded-md">
                        <div className="pointer-events-none ">
                          <MagnifyingGlassIcon
                            className="w-4 h-4 ml-2 text-wet-text"
                            aria-hidden="true"
                          />
                        </div>

                        <input
                          name="query"
                          id="query "
                          className="w-[30vw] h-7 text-xs text-wet-text border-transparent bg-wet-mid rounded-md focus:ring-0 focus:border-transparent"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="flex flex-row items-center h-full px-5 space-x-3 sm:space-x-5 sm:px-10">
                        <button className="text-xs text-white ">
                          <BellIcon className="w-4 h-4" />
                        </button>

                        <button className="text-xs text-white ">
                          <ChatBubbleLeftIcon className="w-4 h-4" />
                        </button>

                        <button className="text-xs text-white ">
                          <Cog6ToothIcon className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0">
                        <div>
                          <Menu.Button className="flex text-sm rounded-full">
                            <span className="sr-only">Open user menu</span>
                            <Image
                              className="w-8 h-8 rounded-full"
                              src="/images/avatars/luiz.png"
                              alt={"alt"}
                              height={32}
                              width={32}
                            />
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
                          <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ">
                            <Menu.Item>
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                              >
                                Edit Profile
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                              >
                                Sign out
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="">{React.cloneElement(children)}</div>
        </div>
      </div>
    </>
  );
}
