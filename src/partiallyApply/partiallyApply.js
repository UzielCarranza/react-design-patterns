

export const partiallyApply = (Component, partialProps) => {
    return props => (
         <Component {...partialProps} {...props} ></Component>
    )
}

export const Button = ({size, color, text, ...props}) => {

    return (
        <button style={{padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color,

        }} {...props}>{text}</button>
    )
}


export const DangerBtn = partiallyApply(Button, {color: 'red'});

export const BigSuccessBtn = partiallyApply(Button, {color: 'green', size: 'large'});