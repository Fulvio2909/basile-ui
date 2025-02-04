import styles from '../styles/ContentContainer.module.css';

type ContentContainerProps = {
    children: React.ReactNode;
    };

export const ContentContainer = ({ children }: ContentContainerProps) => {
    return (
        <div className={styles.ContentContainer}>
            {children}
        </div>
    );
}