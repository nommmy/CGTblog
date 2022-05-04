import { FC } from 'react';
import { Helmet } from 'react-helmet';
import Aside from 'components/templates/Aside';
import GenreIcon from 'components/atoms/GenreIcon';
import { TwitterIcon } from 'react-share';
import MediaQuery from 'react-responsive';
import '_markdown_extension.scss';

const IntroPage: FC = () => (
  <>
    <Helmet>
      <title>ぽむログとは</title>
    </Helmet>
    <div className="flex-container">
      <main>
        <article className="article_container">
          <section className="article_header">
            <img
              src="header_logo7.png"
              alt="Header"
              style={{ width: '100%', display: 'block', paddingTop: '30px' }}
              onError={(e) => {
                (e.target as React.ImgHTMLAttributes<HTMLImageElement>).src =
                  'IMG_0740.JPG';
              }}
            />
          </section>
          <div className="react-split-mde-preview welcome_content">
            <p>
              漫画好きの皆さん、はじめまして！
              <br />
              編集者の「ぽむ」と申します。
            </p>
            <p>
              このページでは、<strong>ぽむログ</strong>
              とはどういうサイトなんだというところをご説明したいと思います。
            </p>
            <div className="welcome_table_of_content">
              <h2>この記事の目次</h2>
              <ul>
                <li>
                  <a href="#ぽむログとは">ぽむログとは？</a>
                  <ul>
                    <li>
                      <a href="#ジャンル検索">ジャンル検索</a>
                    </li>
                    <li>
                      <a href="#タグ">タグ</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#まとめ">まとめ</a>
                </li>
              </ul>
            </div>
            <section>
              <h1 id="ぽむログとは">ぽむログとは？</h1>
              <p>
                一言で言うと、
                <strong>
                  「超面白いおすすめのマンガを紹介する個人ブログ」
                </strong>
                です。言わずもがなマンガが凄く大好きで、好きが高じてこのブログを書こうと思ったわけなのですが、目標としては少しばかり高尚なのがありまして。。。
              </p>
              <p>
                <strong>
                  <span className="highlight">
                    「面白いマンガを広めたい！」
                  </span>
                </strong>
              </p>
              <p>
                これがぽむログの掲げる唯一の目標です。嬉しいことにこの国にはたくさんのマンガがありますが、面白いからといって知名度が高いとは限りません。理由は様々だと思いますが、万人受けする内容じゃなかったり、少し難しかったり、メディア展開をしていなかったり。。
              </p>
              <p>
                そういう<strong>まだ陽の目を見ていない</strong>
                マンガたちにスポットを当てる手助けができたらと思って、このブログをはじめました。気になっている作品がある方がこのブログを読んで、実際にマンガを読んでくれたり、購入してくれたりしたら嬉しい限りです。
              </p>
              <p>
                さてぽむログの純然たる起源を説明したところで、このブログには、読んでいただいている方にいろんな作品に触れてもらうためのちょっとした工夫を施しましたので、いくつかご紹介したいと思います。
              </p>
              <section>
                <h2 id="ジャンル検索">ジャンル検索</h2>
                <div className="welcome_image">
                  <img
                    src="genre_search.png"
                    alt="genre_search"
                    style={{
                      width: '100%',
                    }}
                  />
                </div>
                <p>
                  各作品にジャンルを振り分けています（一つのタイトルに複数のジャンルがついていることもあります）。トップページの記事一覧の上部には画像のようなジャンル絞り込みのタブバーがあり、お好きなジャンルの記事を表示することが出来ます。ジャンルの種類は以下の通りです。
                </p>
                <div className="icon_grid">
                  <div className="flex">
                    <GenreIcon genre="aoharu" />
                    <p>青春・学園</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="battle" />
                    <p>バトル</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="music" />
                    <p>音楽</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="love" />
                    <p>恋愛・ラブコメ</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="sports" />
                    <p>スポーツ</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="food" />
                    <p>料理・食べ物</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="gag" />
                    <p>ギャグ</p>
                  </div>
                  <div className="flex">
                    <GenreIcon genre="tears" />
                    <p>感動・涙</p>
                  </div>
                  <div className="flex last-grid">
                    <GenreIcon genre="drama" />
                    <p>ドキュメンタリ・お仕事もの</p>
                  </div>
                </div>
              </section>
              <section>
                <h2 id="タグ">タグ</h2>
                <p>
                  作品の特徴を表すタグをつけています。トップページや記事の中に載せているので、好きな作品を探す参考になるかと思います。また、
                  <strong>「似た特徴を持つ作品」</strong>や
                  <strong>
                    「これが好きな人はこの作品も好きそうだと思う作品」
                  </strong>
                  は各記事の最後の<strong>「Relation」</strong>
                  の欄に掲載していますので、ぜひ見てみてください。
                </p>
              </section>
              <section>
                <h1 id="まとめ">まとめ</h1>
                <p>
                  好きな作品を探す手助けになるよう、今後も記事や機能をどんどん追加していく予定です。もしかしたら、マンガだけでなく、ゲームや小説の紹介も。。。まあこれはだいぶ先の話になるかと思いますが。
                </p>
                <p>
                  最後に、読んでいただくにあたって一つ注意していただきたいのが、
                  <strong>
                    このブログはネタバレを多分に含んでる可能性がある
                  </strong>
                  ということです。ストーリーの根幹や種明かしみたいなそれを言っちゃったら面白さ半減みたいなことはやらないつもりですが、未読の方がある程度先の展開がわかっちゃったみたいなこと（「あ、この人仲間になるのね」とか「主人公こういう成長するのね」とか）はあるかもしれませんのでご了承ください。
                </p>
                <p>
                  それでは、マンガ探しの旅をお楽しみください。公式Twitterの方もぜひぜひフォローお願いします！
                </p>
              </section>
            </section>
            <div className="twitter_container">
              <img
                src="headline/follow.png"
                alt="follow"
                className="followme_header"
              />
              <a
                href="https://twitter.com/pomme_blog"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="twitter_button"
              >
                <TwitterIcon size={35} round />
                <div className="twitter_id">@pomme_blog</div>
              </a>
            </div>
          </div>
        </article>
      </main>
      <MediaQuery minWidth={860}>
        <aside>
          <Aside />
        </aside>
      </MediaQuery>
    </div>
  </>
);

export default IntroPage;
