export default function Skeleton({ className, ...props }: any) {
    return (
        <div className={`animate-pulse bg-gray-300 ${className}`} {...props}></div>
    )
}
