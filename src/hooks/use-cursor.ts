"use client"

import { useState } from "react"

const useCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const onCursorMove = ({ clientX, clientY }: MouseEvent) => {
        setPosition({ x: clientX, y: clientY })
    };

    return { position, onCursorMove }
}

export { useCursor }