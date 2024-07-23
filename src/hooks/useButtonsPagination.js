import {useMemo, useState} from "react";

export const useButtonsPagination = (totalCount, page) => {
    const [buttons, setButtons] = useState([])

    useMemo(() => {
        const buttons = []
        for (let i = 1; i <= totalCount; i++) {
            buttons.push(i)
        }
        setButtons(buttons)

    }, [totalCount, page])

    return buttons
}
