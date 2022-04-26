import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedbacks, setFeedbacks] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedbacks
    const fetchFeedback = async () => {
        const response =await fetch(`/feedbacks?_sort=id&order=desc`)
        const data = await response.json()

        setFeedbacks(data);
        setIsLoading(false)
    } 

    // add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedbacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedbacks([data, ...feedbacks]);  
    }

    // delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('are you sure you want to delete?')) {
            await fetch(`/Feedbacks/${id}`, {method: 'DELETE'})
        setFeedbacks((prev) => prev.filter(item => item.id !== id))
    }
    }

    // Update feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        setFeedbacks(feedbacks.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedbacks,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext