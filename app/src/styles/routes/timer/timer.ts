import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledTimer = styled.main`
  width: 100%;
  height: 100%;

  padding-top: 1.2rem;

  display: grid;
  grid-template-rows: 1fr 5.6rem 9.2rem;
  align-items: end;

  animation: enterFromBottom 160ms ease;

  @keyframes enterFromBottom {
    0% {
      opacity: 0;
      transform: translateY(1.2rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledTimerNoteContainer = styled.div`
  width: 100%;
  height: 5.6rem;

  padding: 0 1.6rem;
`;

export const StyledTimerNoteWrapper = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  padding-bottom: 0.6rem;

  border-radius: 3px;
  border: 1px solid var(--color-border-secondary);
  background-color: var(--color-bg-secondary);

  &:hover {
    border-color: var(--color-border-primary);
    background-color: var(--color-bg-tertiary);
  }
`;

export const StyledTimerNoteHeader = styled.header``;

export const StyledTimerNoteHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-heading-text);
`;

export const StyledTimerNoteDescription = styled.p`
  color: var(--color-body-text);
`;
