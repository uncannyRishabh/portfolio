import {useRef , useState , useEffect} from 'react'

export const useIsIntersecting = (options) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const Callback = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(Callback, options)
        if(ref.current) observer.observe(ref.current)
        
        return (() => {
            if(ref.current) observer.unobserve(ref.current)
        })
    })

    return [ref, isVisible]
}