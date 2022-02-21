import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const description =
    "Rancher中文文档由Rancher中国研发团队翻译并重新编排，每周更新，与Rancher英文文档保持同步。另一方面，Rancher中文文档也是Kubernetes入门的重要性内容文档，用户可以从中获得K8S相关的有用知识。";
const keywords = ["Rancher文档", "k8s文档", "容器管理平台", "Kubernetes集群"];
const metaTitle = "Rancher文档 | K8S文档 | Rancher";
function findAndAppendSubGroups(all, metadata, baseUrl, subItems) {
    subItems.forEach((sub) => {
        if (typeof sub === "string") {
            const label = metadata.docs.rancher2[sub];
            if (label) {
                all.push({
                    label,
                    key: baseUrl + "docs/" + sub,
                });
            }
        } else if (sub.items) {
            findAndAppendSubGroups(all, metadata, baseUrl, sub.items);
        }
    });
}

function getToc(sidebars, metadata, baseUrl) {
    const out = [];
    const docs = sidebars.rancher2;
    Object.keys(docs).forEach((categoryKey) => {
        const allSubGroups = [];
        findAndAppendSubGroups(
            allSubGroups,
            metadata,
            baseUrl,
            docs[categoryKey]
        );
        const description = metadata.categories.rancher2[categoryKey];
        if (description) {
            out.push({
                key: categoryKey,
                description,
                subGroups: allSubGroups,
            });
        }
    });
    return out;
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    const { baseUrl } = siteConfig;
    const { sidebars, metadata } = siteConfig.customFields;
    const toc = getToc(sidebars, metadata, baseUrl);
    const title = "Rancher 中文文档";
    return (
        <Layout title={metaTitle} description={description} keywords={keywords}>
            <header className={classnames("hero", styles.heroBanner)}>
                <div className="container">
                    <img
                        className="hero__logo"
                        src="/img/rancher-logo-stacked-color.svg"
                    />
                    <p className="hero__subtitle navigation__subtitle">
                        {title}
                    </p>
                </div>
            </header>
            <main>
                <div className="navigation__grid">
                <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="https://rancher.com/docs/rancher/v2.6/en/">
                                <h1>Rancher 2.6</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Rancher 2.6 中文文档正在努力筹备中，如需查阅 2.6 文档，请移步至 <a href="https://rancher.com/docs/rancher/v2.6/en/">2.6 英文文档</a>
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/rancher2.5">
                                <h1>Rancher 2.5</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Rancher
                                是为使用容器的公司打造的容器管理平台。Rancher
                                简化了使用 Kubernetes 的流程，开发者可以随处运行
                                Kubernetes（Run Kubernetes Everywhere），满足 IT
                                需求规范，赋能 DevOps 团队。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/rancher2">
                                <h1>Rancher 2.0-2.4</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Rancher
                                是为使用容器的公司打造的容器管理平台。Rancher
                                简化了使用 Kubernetes 的流程，开发者可以随处运行
                                Kubernetes（Run Kubernetes Everywhere），满足 IT
                                需求规范，赋能 DevOps 团队。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/rke">
                                <h1>RKE</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Rancher Kubernetes
                                Engine（RKE）是一款非常简单，运行速度快的Kubernetes安装程序，支持各种运行平台。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/k3s">
                                <h1>K3s</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                K3s 是一个轻量级的 Kubernetes 发行版，它针对边缘计算、物联网等场景进行了高度优化。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/rke2">
                                <h1>RKE2</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                            RKE2，也被称为 RKE Government，是 Rancher 的下一代 Kubernetes 发行版。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/harvester">
                                <h1>Harvester v0.3.0</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Harvester 是由 Rancher 提供的基于 Kubernetes 构建的 100% 开源的超融合基础架构（HCI）软件。
                                它是 vSphere 和 Nutanix 的开源替代方案。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/harvester1.0">
                                <h1>Harvester 1.0</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Harvester 是 Rancher 提供的基于 Kubernetes 构建的 00% 开源的超融合基础架构（HCI）软件。 
                                它是 vSphere 和 Nutanix 的开源替代方案。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/rancherdesktop">
                                <h1>Rancher Desktop</h1>
                            </a>
                        </div>
                        <div className="navigation__content">
                            <p>
                            Rancher Desktop 是一款在桌面上提供容器和 Kubernetes 管理的应用。它适用于 Mac（包括 Intel 和 Apple Silicon）、Windows 和 Linux。
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <main>
                <div className="navigation__grid">
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/octopus">
                                <h1>Octopus</h1>
                            </a>
                            <h3>已经暂停维护，不建议生产使用</h3>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Octopus是基于Kubernetes或k3s的开源和云原生的设备管理系统，它非常轻巧，也不需要替换Kubernetes集群的任何基础组件。
                                部署了Octopus，集群可以将边缘设备作为自定义k8s资源进行管理。
                            </p>
                        </div>
                    </div>
                    <div className="navigation__item">
                        <div className="navigation__title">
                            <a href="/rancher1">
                                <h1>Rancher 1.x</h1>
                            </a>
                            <h3>已经暂停维护，不建议生产使用</h3>
                        </div>
                        <div className="navigation__content">
                            <p>
                                Rancher帮助企业能够在生产环境中运行和管理Docker和Kubernetes，而无需从头开始构建容器服务平台。Rancher不再维护1.x版本的文档，建议您升级至2.x后，配合2.x文档使用新版Rancher。
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;
