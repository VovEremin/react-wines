import styled from "styled-components";
import barrelIcon from '../../assets/img/barrel.svg'
import bottleIcon from '../../assets/img/bottle.svg'
import homeIcon from '../../assets/img/home.svg'
import knowledgeIcon from '../../assets/img/knowledge.svg'
import settingsIcon from '../../assets/img/settings.svg'
import userIcon from '../../assets/img/user.svg'

interface ILink {
    id: number
    alt: string
    icon: string
}

const asideItems: ILink[] = [
    {
        id: 0,
        alt: 'List',
        icon: barrelIcon
    },
    {
        id: 1,
        alt: 'Sommelier',
        icon: bottleIcon
    },
    {
        id: 2,
        alt: 'Home page',
        icon: homeIcon
    },
    {
        id: 3,
        alt: 'FAQ',
        icon: knowledgeIcon
    },
    {
        id: 4,
        alt: 'Settings',
        icon: settingsIcon
    },
    {
        id: 5,
        alt: 'Profile',
        icon: userIcon
    }
]

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #341650;
  width: 120px;
  height: 90vh;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top-right-radius: 50px;
`

const StyledLink = styled.a`
  width: 40px;
  height: 40px;
  text-align: center;
  img {
    width: 100%;
  }
  span {
    font-size: 56px;
    font-weight: 700;
    color: #f0d9d2;
  }
`

export default function Sidebar () {
    return (
        <StyledSidebar>
            <StyledLink>
                <span>V</span>
            </StyledLink>
            {
                asideItems.map((item: ILink) => {
                    return (
                        <StyledLink href='/' key={`${item}_${item.id}`}>
                            <img src={item.icon} alt="" />
                        </StyledLink>
                    )
                })
            }
        </StyledSidebar>
    )
}