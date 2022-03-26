import {useRef , useState , useEffect} from 'react'

export const useIsIntersecting = (options) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const Callback = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
		let tref = null
        const observer = new IntersectionObserver(Callback, options)
        if(ref.current) {
			tref = ref.current
			observer.observe(tref)
		}
        
        return (() => {
            if(tref) observer.unobserve(tref)
        })
    })

    return [ref, isVisible]
}