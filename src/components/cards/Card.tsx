import clsx from "clsx";
import React, {AllHTMLAttributes} from "react";

export interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
    className?: string;
    customClass?: string;
    image?: string
    bgSize?: string
    bgPosition?: string
    bgColor?: string
    bgRepeat?: string
    borderRadius?: string
    grow?: boolean
  }
  
  const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (props, ref) => {
      const {
        children,
        className,
        customClass,
        image,
        bgSize,
        bgPosition,
        bgColor,
        bgRepeat,
        borderRadius,
        grow,
        ...rest
      } = props;
  
      return (
        <div
        className={clsx(`flex flex-col ${borderRadius ? borderRadius : "rounded-md"}`,
          {
            'grow': grow
          }
        )}
        style={{
                backgroundImage: image,
                backgroundSize: bgSize ? bgSize : '100%',
                backgroundPosition: bgPosition ? `${bgPosition} ${bgPosition}` : "center center",
                backgroundRepeat: bgRepeat ? bgRepeat : 'no-repeat'
            }}
        >
            <div 
                className={clsx(`p-4 rounded-md 
                  ${bgColor ? bgColor : 'bg-white'} 
                  ${borderRadius ? borderRadius : "rounded-md"}`,
                  className
                )}
            >
                {children}
            </div>
        </div>
      );
    }
  );
  
Card.displayName = 'Button';

  

export default Card;