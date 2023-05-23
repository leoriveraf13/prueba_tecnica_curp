export const prevent = (e: React.FormEvent<HTMLInputElement>): unknown =>
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9a-zA-Z+]/gi, '').toUpperCase()