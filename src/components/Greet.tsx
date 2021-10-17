
type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                Welcome {props.name}! How you doing.
            </h2>
        </div>
    )
}

