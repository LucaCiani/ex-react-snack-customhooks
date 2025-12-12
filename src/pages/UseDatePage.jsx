import useDate from "../hooks/useDate";

export default function useDatePage() {
    const currentDate = useDate();

    return (
        <div>
            <h1>Data e ora attuali:</h1>
            <p>{currentDate}</p>
        </div>
    );
}
