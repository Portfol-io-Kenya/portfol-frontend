import clsx from "clsx"
import Card from "./Card"

type Props = {
    className?: string
    description: string
    color?: string
    img?: string
    count: any
    isLoading?: boolean
  }
  
  const CounterCard = ({className, description, color, img, count, isLoading}: Props) => (
    <>
    {isLoading
      ?
      <h3>Loader here...</h3>
      :
        <Card 
            grow
            bgColor="bg-gradient-to-r from-green-700/90 to-black/80"
            image='url(/media/bgs/pattern-1.jpg)'
            className={clsx(`flex flex-col justify-between `, className)}
        >
            <div className='flex justify-between items-stretch flex-wrap pt-5'>
                <div className='flex flex-col'>
                    <span className='text-[24px] font-semibold text-white mr-2'>{count}</span>
        
                    <span className='text-white/70 pt-1 text-sm'>{description}</span>
                </div>
            </div>
            <div className='flex items-end py-5'>
                <div className='flex items-center flex-col mt-3 w-full'>
                    <div className='flex justify-between text-xs text-white opacity-75 w-full mt-auto mb-2'>
                    <span>{count-(count/2)} Done</span>
                    <span>{`${Math.round(((count-(count/2))/count)*100)}%`}</span>
                    </div>
        
                    <div className="w-full bg-gray-200/30 rounded-full h-2">
                        <div
                            className="bg-white h-2 rounded-full" 
                            style={{width: `${((count-(count/2))/count)*100}%`}}
                        ></div>
                    </div>
                </div>
            </div>
        </Card>
    }
    </>
  )
  export {CounterCard}
  