import React from 'react';
import styled from 'styled-components';
import muiButton from '@material-ui/core/Button';

export default function StyledButton(props) {
    const { children } = props;

    // Material-UI をカッコで囲んで、styled の引数にしてやる
    const StyledButton = styled(muiButton)`
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        border-radius: 3px;
        border: 0;
        color: white;
        height: 48px;
        padding: 0 30px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    `;

    return <StyledButton>{children}</StyledButton>;
}
