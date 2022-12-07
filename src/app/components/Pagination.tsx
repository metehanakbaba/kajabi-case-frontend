import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import chevronLeft from "../../assets/images/pagination/chevron-left.svg";
import chevronsLeft from "../../assets/images/pagination/chevrons-left.svg";
import chevronRight from "../../assets/images/pagination/chevron-right.svg";
import chevronsRight from "../../assets/images/pagination/chevrons-right.svg";

const enabled = `
  cursor: pointer;
  background-color: var(--color-primary);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-primary-dark);
  }
  &:active {
    background-color: var(--color-primary-light);
  }
`;

const disabled = `
  background-color: var(--color-primary-disabled);
`;

const PaginationContainer: React.FC<PropsWithChildren> = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 0.8rem;
  }
`;

const PaginationButton: React.FC<React.ButtonHTMLAttributes<any>> = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 50px;
  img {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(175deg) brightness(121%)
      contrast(114%);
  }
  ${(props) => (props.disabled ? disabled : enabled)};
`;

const PaginationLabel = styled.label`
  font-size: 1rem;
`;

interface Props {
  page: number;
  // eslint-disable-next-line no-unused-vars
  setPage: (page: number) => void;
  total: number;
  limit: number;
  disableAction: boolean;
}

function Pagination({ page, setPage, total, limit, disableAction }: Props): React.ReactElement {
  const goToFirstPage = () => setPage(1);

  const getLastPage = () => Math.ceil(total / limit);

  const goToLastPage = () => setPage(getLastPage());

  const incrementPage = () => page < getLastPage() && setPage(page + 1);

  const decrementPage = () => page > 1 && setPage(page - 1);

  const atFirstPage = () => disableAction || page === 1;

  const atLastPage = () => disableAction || page === getLastPage();

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => goToFirstPage()} disabled={atFirstPage()}>
        <img src={chevronsLeft} alt="go to first page icon" />
      </PaginationButton>
      <PaginationButton onClick={() => decrementPage()} disabled={atFirstPage()}>
        <img src={chevronLeft} alt="go to previous page icon" />
      </PaginationButton>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationButton onClick={incrementPage} disabled={atLastPage()}>
        <img src={chevronRight} alt="go to next page icon" />
      </PaginationButton>
      <PaginationButton onClick={goToLastPage} disabled={atLastPage()}>
        <img src={chevronsRight} alt="go to last page icon" />
      </PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
