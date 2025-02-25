export function formatDate(date) {
    return new Date(date).toLocaleString('en-IE', {
       
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    })
}