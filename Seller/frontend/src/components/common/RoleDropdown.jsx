import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { RiAdminLine } from "react-icons/ri"
import { GoPeople } from "react-icons/go";
import useOnClickOutside from "../../hooks/useOnClickOutside"

export default function RoleDropdown({ role }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (role === 'Seller' || role === 'Admin' || role === 'Customer') {
    return null;
  }

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1 cursor-pointer bg-gray-200 p-2 rounded-md">
        <p>Not a Customer</p>
        <AiOutlineCaretDown className="text-sm" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] overflow-hidden rounded-md border-[1px]"
          ref={ref}
        >
          <Link to="/admin/login" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm ">
              <RiAdminLine className="text-lg" />
              Admin's Panel
            </div>
          </Link>
          <Link to="/seller/login" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm ">
              <GoPeople className="text-lg" />
              Seller's Portal
            </div>
          </Link>
        </div>
      )}
    </button>
  )
}
