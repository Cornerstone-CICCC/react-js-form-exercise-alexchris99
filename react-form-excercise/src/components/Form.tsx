import { type FormEvent, useState, type ChangeEvent } from "react"

type FormData ={
    firstname: string,
    lastname: string,
    age: number,
    favoriteFood: string[],
}

const Form = () => {
    // state
    const [clear, setClear] = useState<boolean>(true)
    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        age: 0,
        favoriteFood: [""]
    })
    // handler
    const handleChangue = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setFormData(prevState=>({
            ...prevState,
            [name]: value
        }))
    }

    const handleCheckbox =(e: ChangeEvent<HTMLInputElement>)=>{
        const {value, checked} = e.target
        setFormData(PrevState=>{
            const updateFood = checked ? [...PrevState.favoriteFood, value] : PrevState.favoriteFood.filter(level => level !== value)
            return {
                ...PrevState,
                favoriteFood: updateFood
            }
        })
    }

    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault()
    }

    const handleClear = ()=>{
        setClear(!clear)
        if(clear === true){
            setFormData({
                firstname: "",
                lastname: "",
                age: 0,
                favoriteFood: [""]
            })
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5em",
            marginBottom: ".5em"
        }}>
            <label>
                <input type="text" name="firstname" placeholder="First Name" onChange={handleChangue} value={formData.firstname}/>
            </label>
            <label>
                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChangue} value={formData.lastname}/>
            </label>
            <label>
                <input type="number" name="age" placeholder="Age" onChange={handleChangue} value={formData.age}/>
            </label>
            <fieldset style={{
                display: "flex",
                flexDirection: "column",
                gap: ".2em"
            }}>
                <label>
                    Chiken
                    <input type="checkbox" name="favoriteFood" value="Chiken" checked={formData.favoriteFood.includes("Chiken")} onChange={handleCheckbox}/>
                </label>
                <label>
                    Beef
                    <input type="checkBox" name="favoriteFood" value="Beef" checked={formData.favoriteFood.includes("Beef")} onChange={handleCheckbox}/>
                </label>
                <label>
                    Vegetables
                    <input type="checkbox"  name="favoriteFood" value="Vegetables" checked={formData.favoriteFood.includes("Vegetables")} onChange={handleCheckbox}/>
                </label>
                <label>
                    Dessert
                    <input type="checkbox" name="favoriteFood" value="Dessert" checked={formData.favoriteFood.includes("Dessert")} onChange={handleCheckbox}/>
                </label>
                <label>
                    Pork
                    <input type="checkbox" name="favoriteFood" value="Pork" checked={formData.favoriteFood.includes("Pork")} onChange={handleCheckbox}/>
                </label>
            </fieldset>
            <button type="submit">Display User</button>
        </form>

        <button type="button" onClick={handleClear}>Clear</button>

        <ul style={{
            display: clear ? "flex" : "none" 
        }}>
            <li>Welcome {formData.firstname} {formData.lastname}. You are {formData.age} years old. And your favoriteFood is {formData.favoriteFood.map((food, index)=>(
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                <span>{food} </span> 
            ))}</li>
        </ul>
    </div>
  )
}

export default Form