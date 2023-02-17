function useCounter (startValue = 0) {
    const [counter, setCounter] = useState(startValue);

    return {
        counter,
        increment: () => setCounter(counter+1),
    };
}
export default useCounter;