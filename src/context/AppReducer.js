export default (state,action) => {
    switch (action.type) {
        case 'add':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'remove':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }    
        default:
            return state;
    }
}
