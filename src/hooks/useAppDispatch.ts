import { Dispatch } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = (): Dispatch<any> => useDispatch<AppDispatch>()
export default useAppDispatch()
