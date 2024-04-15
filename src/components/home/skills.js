import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const text = "Languages";
const text1 = "Tools";

const styleEvenLetters = (index) => {
    return index % 2 === 0 ? { color: "#1a90ff" } : {};
};

const Skills = () => {
    return (
        <>
            <small>
                skills
            </small>

            <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>SKILLS</h2>
            <h3 style={{ letterSpacing: "10px", margin: "10px 0" }}>
                {text.split('').map((char, index) => (
                    <span key={index} style={styleEvenLetters(index)}>{char}</span>
                ))}
            </h3>
            <div className='skills'>
                <div>
                    <h5>HTML</h5>
                    <BorderLinearProgress variant="determinate" value={90} />
                </div>
                <div>
                    <h5>CSS</h5>
                    <BorderLinearProgress variant="determinate" value={90} />
                </div>
                <div>
                    <h5>BOOTSTRAP</h5>
                    <BorderLinearProgress variant="determinate" value={80} />
                </div>
                <div>
                    <h5>JAVASCRIPT</h5>
                    <BorderLinearProgress variant="determinate" value={50} />
                </div>
                <div>
                    <h5>REACT</h5>
                    <BorderLinearProgress variant="determinate" value={50} />
                </div>
                <div>
                    <h5>NODE JS</h5>
                    <BorderLinearProgress variant="determinate" value={50} />
                </div>
            </div>

            <h3 style={{ letterSpacing: "10px", margin: "10px 0" }}>
                {text1.split('').map((char, index) => (
                    <span key={index} style={styleEvenLetters(index)}>{char}</span>
                ))}
            </h3>
        </>
    )
}

export default Skills;