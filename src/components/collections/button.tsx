import styled from "@emotion/styled";

interface ButtonProps {
    label: string;
    click: () => void;
    color: string;
    borderRadius: string;
}

interface ButtonStyleProps {
    variantcolor: string;
    borderRadius: string;
}

// const ButtonUi = styled.button`
//     background-color: ${(props: ButtonStyleProps) =>
//         props.variantcolor ? props.variantcolor : "gray"};
//     border: none;
//     border-radius: ${(props: ButtonStyleProps) => props.borderRadius};
//     color: white;
//     padding: 10px 15px;borderRadius
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 10px;
// `;

const ButtonUi = styled.button`
    border: 2px solid
        ${(props: ButtonStyleProps) =>
            props.variantcolor ? props.variantcolor : "gray"};
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 20px;
`;

export const Button = (props: ButtonProps) => {
    const { label, click, color, borderRadius } = props;

    console.log({ borderRadius }, "Button");
    return (
        <ButtonUi
            borderRadius={borderRadius}
            variantcolor={color}
            onClick={click}>
            {label}
        </ButtonUi>
    );
};
