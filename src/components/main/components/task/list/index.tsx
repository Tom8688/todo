import { Button } from "../../../../collections/button";
import { Task } from "../../../../types/task";
import styled from "@emotion/styled";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
    padding: 0;

    & > li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 20px;
        background-color: paleturquoise;
        min-width: 125px;
    }
`;

const CenterDiv = styled.div`
    min-height: 120px;
`;

const ButtonWraper = styled.div`
    display: flex;
    gap: 20px;
    padding: 14px 10px;
`;

interface ListProps {
    items: Task[];
    removeTask: (taskToRemove: Task) => void;
}

const List = (props: ListProps) => {
    // console.log("List");

    // CSS in JS

    const liStyle = {
        display: "flex",
        justifyContent: "space-between",
    };

    const items = props.items;

    const tasksList = items.map((value: Task, index: number) => {
        return (
            <li key={index}>
                <p>{value.text}</p>
                <CenterDiv></CenterDiv>
                <ButtonWraper>
                    <Button
                        label="V"
                        click={() => props.removeTask(value)}
                        color="green"
                        borderRadius="50%"
                    />
                    <Button
                        color=""
                        label="X"
                        click={() => props.removeTask(value)}
                        borderRadius="50%"
                    />
                </ButtonWraper>
            </li>
        );
    });

    return <Ul>{tasksList}</Ul>;
};

export default List;
