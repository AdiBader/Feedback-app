import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbacks, setFeedbacks] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks([newFeedback, ...feedbacks]);  
    }
    // delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete?')) {
        setFeedbacks((prev) => prev.filter(item => item.id !== id))
    }
    }

    // Update feedback
    const updateFeedback = (id, updItem) => {
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