import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '25px', sm: '50px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Что такое цирроз печени?
                </Typography>

                <Typography component="p"
                            sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Цирроз печени</Box> — штука
                    коварная. Представьте себе завод, который годами безотказно трудился, фильтруя и
                    сортируя всё, что попадало внутрь. Но вдруг его ключевые цеха начинают заменяться бесполезными
                    складами — вместо рабочих клеток появляется соединительная ткань, не способная выполнять прежние
                    задачи. В итоге весь организм начинает недополучать необходимые белки, обмен веществ идет
                    наперекосяк, а токсины уже не так исправно выводятся из крови.
                </Typography>

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    Что особенно подлое — на ранних стадиях цирроз почти незаметен: печень долго терпит и “молчит”,
                    постепенно сдавая позиции. Но если вовремя не вмешаться, проблемы накапливаются — вплоть до
                    серьезных осложнений, с которыми шутки плохи. Классическая история о том, как постепенные перемены
                    приводят к внезапному кризису.
                </Typography>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Причины развития цирроза
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Злоупотребление алкоголем
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Если копнуть причины цирроза, первое — и, к сожалению, довольно частое — это
                                злоупотребление
                                алкоголем. Печень работает как фильтр на вечеринке: она берёт удар на себя снова и
                                снова. Но
                                фильтры вечно не живут — алкоголь годами буквально вымывает ресурсы печени, превращая её
                                ткань в плотный рубец.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Вирусные гепатиты B и C
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Следующая большая группа причин — вирусные гепатиты B и C. Долгое воспаление действует
                                по принципу “капля камень точит”: вирусы навязываются печени на годы (а иногда и на
                                десятилетия), вызывая постоянное раздражение и разрушение нормальных клеток. Сама печень
                                пытается чиниться, но со временем новые попытки заживления превращаются всё в те же
                                рубцы.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Метаболические нарушения
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Есть и менее очевидные вещи. Например, лишний вес, инсулинорезистентность и диабет часто
                                тянут за собой перерождение печени в жировую — так называемый неалкогольный
                                стеатогепатит. И вроде бы буклеты про жирную пищу все видели, но мало кто осознаёт:
                                банальные “плюс 10 кг” могут спустя годы проявиться фиброзом печени — а если вовремя не
                                обратить внимание, привести к циррозу.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Длительный приём токсичных лекарств
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Не будем забывать и про лекарства. Некоторые препараты при длительном употреблении
                                оказывают на печень токсичное действие — даже обычные обезболивающие типа парацетамола
                                способны стать проблемой, если за ними не следить.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Наследственные заболевания печени
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Ну и редкие генетические поломки — Вильсон-Коновалов, гемохроматоз... Таких пациентов
                                немного по сравнению с “классикой”, но для них цирроз становится почти неизбежным
                                спутником жизни: обмен веществ нарушен изначально.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ borderLeft: '3px solid var(--main-color)', paddingLeft: '15px', marginTop: '20px' }}>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                        >
                            Короче говоря, сценариев масса — от бокала вина каждый вечер до наследственной лотереи.
                            Главное тут — внимательно относиться к своей печени: многое можно предотвратить, если знать
                            риски и не игнорировать звоночки.
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Симптомы цирроза печени
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Слабость и быстрая утомляемость
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Когда печень перестаёт справляться со своими задачами из-за цирроза, человек это ощущает
                                буквально на себе — и поначалу симптомы могут показаться чем-то незначительным. Кто не
                                сталкивался с усталостью или слабостью? Впрочем, если это становится “новой нормой” без
                                видимых причин и к тому же быстро устаёшь даже после привычных дел — стоит
                                насторожиться.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Потеря веса и аппетита
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Дальше часто подключается потеря веса и аппетита. Знаете, тот случай, когда любимая еда
                                вдруг теряет свой вкус, а порции становятся всё меньше? Организм, если честно, сигналит:
                                “Я в беде”.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Пожелтение кожи и склер
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Пожелтение кожи или глазных склер — уж этот симптом сложно не заметить. Люди иногда
                                сравнивают оттенок кожи с воском или подмечают желтизну на белках глаз в зеркале. Это
                                как лампа тревоги, которую зажигает печень, когда перестаёт фильтровать билирубин.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Асцит (скопление жидкости в животе)
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Ещё один звоночек — асцит. Живот увеличивается в размере не потому что вы переели или
                                набрали пару лишних килограммов — причина глубже: жидкость начинает скапливаться в
                                брюшной полости.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Кровотечения, отёки, сосудистые «звёздочки»
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                А кроме того, появляются кровотечения (например, носовые), отёки (чаще всего ног),
                                сосудистые “звёздочки” под кожей… Все эти проявления по отдельности могут случиться и
                                без цирроза, но их сочетание уже рисует определённую картину. Когда несколько таких
                                симптомов совпадают — стоит как можно быстрее обратиться к врачу.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ borderLeft: '3px solid var(--red)', paddingLeft: '15px', marginTop: '20px' }}>
                        <Typography
                            sx={{
                                color: 'var(--red)',
                                fontSize: { xs: '20px', sm: '24px' },
                                textTransform: 'uppercase',
                            }}
                        >
                            При первых признаках важно срочно обратиться к врачу для диагностики и начала терапии!
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Лечение цирроза печени
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '20px', sm: '24px' },
                    }}
                >
                    Лечение цирроза печени — это не просто набор стандартных процедур, тут приходится действовать сразу
                    в нескольких направлениях, почти как в шахматной партии, где каждая фигура имеет своё значение. В
                    московских федеральных и ведомственных клиниках сегодня есть всё необходимое, чтобы помочь пациенту
                    пройти этот путь максимально эффективно.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Медикаменты
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Во-первых, медикаменты. Препараты подбирают чтобы стабилизировать состояние печени:
                                поддержать те участки, которые еще работают, и чуть замедлить разрушение остальных.
                                Иногда задача — буквально выиграть время для человека. Если дело в вирусном гепатите
                                (чаще всего именно он становится причиной цирроза), то в ход идет противовирусная
                                терапия — современные схемы способны подавлять активность вируса так, что человек
                                возвращается к нормальной жизни спустя годы борьбы.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Диета
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Диета? Она тут не просто про отказ от жареного — врачи смотрят на весь обмен веществ как
                                на сложную экосистему, стараясь убрать дополнительную нагрузку с печени. Порой вместе с
                                гастроэнтерологом подключают диетолога, чтобы всё работало как часы.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Осложнения
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Не обходится и без борьбы с осложнениями: асцит (скопление жидкости в животе) или
                                портальная гипертензия часто становятся «звоночками», что равновесие нарушено. Здесь
                                врачи действуют быстро и решительно, вплоть до оперативных вмешательств.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--main-color)',
                        }}
                    >
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Box>
                            <Typography variant="h3" sx={{
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 500,
                                marginBottom: '5px'
                            }}>
                                Трансплантация
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 18, sm: 20 } }}>
                                Ну а если похвастаться нечем — ресурсы собственной печени исчерпаны — команда
                                специалистов берёт курс на подготовку к трансплантации. Это отдельная история с огромным
                                числом нюансов: психологическая поддержка пациента здесь не менее важна, чем подбор
                                донора.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ borderLeft: '3px solid var(--main-color)', paddingLeft: '15px', marginTop: '20px' }}>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                        >
                            Всё это довольно комплексный процесс, который нельзя свести к паре таблеток или одной
                            операции. Но зато по-настоящему командная игра медицины — врачей разных специальностей и
                            самого пациента.
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему к нам идут пациенты
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Мы тесно сотрудничаем с крупнейшими федеральными и профильными клиниками Москвы — речь не
                            только о названиях «на слуху», а о проверенных специалистах, современных возможностях
                            диагностики и лечения. Иногда этого достаточно, чтобы человек мог чувствовать себя в
                            безопасности даже далеко от дома.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            У нас всё по-честному: если нужна срочная госпитализация — ее организуют максимально быстро,
                            никаких тягучих очередей и вечного ожидания на линии. Плановые вопросы тоже решаются без
                            проволочек — ценим ваше время.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Что касается врачей: нашими гастроэнтерологами и гепатологами можно гордиться — за плечами у
                            каждого немалый опыт и реальные истории пациентов, которым стало легче. Мы знаем, как
                            непросто довериться незнакомцам, особенно когда речь о здоровье (или о здоровье близких).
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            География ограничением не становится: принимаем людей из самых разных уголков России,
                            приезжают и пациенты из стран СНГ. Каждый случай индивидуален — подбираем лечение не «по
                            шаблону», а исходя из того, что действительно работает именно для этого человека. Порой
                            такая точная работа экономит месяцы поисков и разочарований.
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
});
