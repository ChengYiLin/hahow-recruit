import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { IHeroProfile } from "../../types/service";

enum OperationType {
    ADD,
    MINUS,
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 0;
    gap: 10px;
`;

const AttributeName = styled.p`
    flex: 1 1 100px;
    font-size: 16px;
    text-align: center;
`;

const ButtonGroup = styled.div`
    flex: 2 1 200px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const OperationButton = styled.button`
    padding: 6px 12px;
    cursor: pointer;
`;

interface IProps {
    name: keyof IHeroProfile;
    profileData: IHeroProfile;
    setProfile: Dispatch<SetStateAction<IHeroProfile>>;
    disableAdd?: boolean;
}

const ProfileAttribute: FC<IProps> = ({
    name,
    profileData,
    setProfile,
    disableAdd,
}) => {
    const handleOperation = (type: OperationType) => {
        if (type === OperationType.ADD) {
            setProfile((prev) => ({
                ...prev,
                [name]: prev[name] + 1,
            }));
        }

        if (type === OperationType.MINUS) {
            setProfile((prev) => ({
                ...prev,
                [name]: prev[name] - 1,
            }));
        }
    };

    return (
        <Wrapper>
            <AttributeName>{name.toUpperCase()}</AttributeName>
            <ButtonGroup>
                <OperationButton
                    disabled={disableAdd}
                    onClick={() => handleOperation(OperationType["ADD"])}
                >
                    +
                </OperationButton>
                <p>{profileData[name]}</p>
                <OperationButton
                    disabled={profileData[name] === 0}
                    onClick={() => handleOperation(OperationType["MINUS"])}
                >
                    -
                </OperationButton>
            </ButtonGroup>
        </Wrapper>
    );
};

export default ProfileAttribute;
